import React from 'react'

export default function Button({text, func}) {
  return (
    <button onClick={func} className="px-8 py-4 mx-auto rounded-md border-2 border-cyan-300 border-solid bg-zinc-950 cyanShadow duration-200">
                <p>{text}</p>
            </button>
  )
}
