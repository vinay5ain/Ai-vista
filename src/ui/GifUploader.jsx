import React, { useEffect, useRef, useState } from 'react'

export function GifUploader() {
  const [preview, setPreview] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  function onFile(e) {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  function clear() {
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="gif-uploader">
      <label className="gif-uploader__drop join-card">
        <input
          ref={inputRef}
          type="file"
          accept="image/gif,video/mp4,image/*"
          onChange={onFile}
          className="sr-only"
        />
        <div className="p-4 text-sm text-[var(--color-ink-muted)]">
          <strong className="text-[var(--color-ink)]">Upload GIF</strong>
          <div className="mt-2">Choose a GIF to preview with a glass-morphism overlay.</div>
        </div>
      </label>

      {preview ? (
        <div className="gif-uploader__preview">
          <img src={preview} alt="gif preview" className="gif-uploader__img" />
          <div className="gif-uploader__glass" aria-hidden />
          <div className="gif-uploader__controls">
            <button className="join-hero-button" onClick={clear} type="button">
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="text-sm text-[var(--color-ink-muted)]">No GIF selected.</div>
      )}
    </div>
  )
}

export default GifUploader
