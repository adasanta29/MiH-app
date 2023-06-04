import React from 'react'

type Props = {
    children: React.ReactNode;
}

const HText = ({children}: Props) => {
  return (
    <h1 className='basis-3/5 font-worksans text-3xl font-bold text-primary-500'>
        {children}
    </h1>
  )
}

export default HText