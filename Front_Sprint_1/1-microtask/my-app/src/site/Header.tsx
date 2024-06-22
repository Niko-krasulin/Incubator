type titleHeaderProps = {
    titleHeader: string
}

export const Header = ({titleHeader}:titleHeaderProps) => {
    return (
        <div>{titleHeader}</div>
    )
}