type IconType = {
  icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>>
  img?: string
  size?: number
}

export default function Icon(props: IconType) {
  const style = { height: `${props.size || 1}em`, marginRight: '.4em' }

  return (
    props.icon ? <props.icon style={style} /> : props.img ? <img src={props.img} style={style} /> : null
  )
}
