function AuthInput({ label, error, className = '', ...props }) {
  return (
    <label className={`block ${className}`.trim()}>
      <span className="ui-label text-muted mb-[8px] block text-[11px]">
        {label}
      </span>
      <input
        className="body-text w-full rounded-[8px] border border-[#6C5CE7]/20 bg-[#090A1A]/80 px-[14px] py-[12px] text-[14px] text-white outline-none transition focus:border-[#9D7BFF]/60"
        {...props}
      />
      {error && (
        <span className="mt-[7px] block text-[12px] text-[#E74C3C]">
          {error}
        </span>
      )}
    </label>
  )
}

export default AuthInput
