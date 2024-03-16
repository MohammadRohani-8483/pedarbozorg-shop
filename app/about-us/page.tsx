'use client'
import React, { useEffect } from 'react'

export default function Page() {

  function enableScroll() {
    window.onscroll = function () { };
  }

  const preventDefault = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };
  useEffect(() => {

    window.scrollTo(0, 0)

    console.log('yes');
  })



  return (
    <div className=''>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
