const FixedBg = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`fixed w-full z-[-10] bg-center bg-cover grayscale`} style={{ backgroundImage:`url(${props.img})`, height: props.height }}></div>
  )
}

export default FixedBg