import PropTypes from 'prop-types';
const Player = ({ player, handelChoicePlayers }) => {
    const {image, name, country, role, rating, batting_style, bowling_style, price } = player
    return (
        <div >
            <div className="card bg-base-100  shadow-xl">
                <figure className='px-2 pt-2'>
                    <img className='rounded-xl h-64 w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex items-center "><span><i className="fa-solid fa-user"></i></span> <span>{name}</span></h2>
                    <div className='flex items-center justify-between text-gray-400 pb-3 border-b-2'>
                        <div className='flex items-center gap-5'>
                            <i className="fa-solid fa-flag"></i>
                            <p>{country}</p>
                        </div>
                        <button className=' text-gray-600'>{role}</button>
                    </div>
                    <h3 className='text-gray-600 font-bold flex justify-between'> <span>Ratting</span> <span>{rating}</span></h3>
                    <div className='md:flex justify-between items-center font-bold '>
                        <h3>{batting_style}</h3>
                        <h3 className='text-gray-600'>{bowling_style ? bowling_style : batting_style}</h3>
                    </div>
                    <div className="card-actions flex justify-between items-center ">
                        <h3 className='font-bold text-gray-600'>Price : $ {price}</h3>
                        <button
                            onClick={() => handelChoicePlayers(player , name ,price)}
                            className="btn btn-primary">Chose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Player.propTypes = {
    player: PropTypes.object.isRequired,
    handelChoicePlayers:PropTypes.func.isRequired
}
export default Player;