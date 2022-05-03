const Logo = ({ logoImg, alternative }) => {
    return(
        <div className="ed-item s-center">
            <img 
                className="s-mb-2"
                src={ logoImg } 
                alt={ alternative }
            />
      </div>
    )
}

export default Logo;