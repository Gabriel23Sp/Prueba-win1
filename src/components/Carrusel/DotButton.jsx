/* eslint-disable react/prop-types */
export const DotButton = ({
  selected,
  onClick
}) => {

  return (
    <button
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type="button"
      onClick={onClick}
    />
  )
}