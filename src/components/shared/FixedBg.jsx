const FixedBg = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className="fixed w-full h-screen z-[-10] bg-center bg-cover" style={{ backgroundImage:`url(${props.img})`}}></div>
  )
}

export default FixedBg