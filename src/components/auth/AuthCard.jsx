function AuthCard({ title, children }) {
  return (
    <section className="panel panel-glow w-full max-w-[480px] rounded-[8px] p-[22px] md:p-[28px]">
      <h1 className="m-0 text-[24px] font-bold text-white">
        {title}
      </h1>
      <div className="mt-[20px]">{children}</div>
    </section>
  )
}

export default AuthCard
