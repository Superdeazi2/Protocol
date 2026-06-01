const USERS_KEY = 'protocol_users'
const CURRENT_USER_KEY = 'protocol_current_user_id'

function readUsers() {
  try {
    return JSON.parse(window.localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

function writeUsers(users) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function createId() {
  return window.crypto?.randomUUID?.() ?? `user-${Date.now()}`
}

function normalizeEmail(email) {
  return email.trim().toLowerCase()
}

export function getCurrentUser() {
  const currentUserId = window.localStorage.getItem(CURRENT_USER_KEY)

  if (!currentUserId) {
    return null
  }

  return readUsers().find((user) => user.id === currentUserId) ?? null
}

export function registerUser({ email, password, nickname }) {
  const users = readUsers()
  const normalizedEmail = normalizeEmail(email)

  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error('Пользователь с таким email уже существует')
  }

  const user = {
    id: createId(),
    email: normalizedEmail,
    password,
    nickname: nickname.trim(),
    avatar: 'Картинка',
    level: 1,
    xp: 0,
    createdAt: new Date().toISOString(),
  }

  writeUsers([...users, user])
  window.localStorage.setItem(CURRENT_USER_KEY, user.id)

  return user
}

export function loginUser({ email, password }) {
  const normalizedEmail = normalizeEmail(email)
  const user = readUsers().find((item) => item.email === normalizedEmail)

  if (!user) {
    throw new Error('Пользователь с таким email не найден')
  }

  if (user.password !== password) {
    throw new Error('Неверный пароль')
  }

  window.localStorage.setItem(CURRENT_USER_KEY, user.id)

  return user
}

export function logoutUser() {
  window.localStorage.removeItem(CURRENT_USER_KEY)
}

export function updateCurrentUser(data) {
  const currentUser = getCurrentUser()

  if (!currentUser) {
    return null
  }

  const nextUser = { ...currentUser, ...data }
  const users = readUsers().map((user) =>
    user.id === currentUser.id ? nextUser : user,
  )

  writeUsers(users)

  return nextUser
}
