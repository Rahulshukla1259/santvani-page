import React from "react";

export default function Breadcrumb() {
  return (<div className="my-3 mx-4">

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li  class="breadcrumb-item"><a className=" text-dark" style={{textDecoration:"none"}}href="#">Home</a></li>
    <span class="material-symbols-outlined">
chevron_right
</span>
    <li class="breadcrumb-item active text-sm" aria-current="page">संतवाणी</li>
  </ol>
</nav>
  </div>);
}
