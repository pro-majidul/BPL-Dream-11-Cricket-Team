import PropTypes from 'prop-types';

const Players = ({ player, deleteSelectedPlayer }) => {
    const { name, role, image, id , price} = player
    return (
        <div className='mb-4'>
            <div className="flex justify-between items-center border px-4 py-3 rounded-xl">
                <div className="flex items-center gap-6 justify-center">
                    <div className=" w-20 h-20 overflow-hidden  border rounded-xl">
                        <img className=" bg-center" src={image} alt="" />
                    </div>
                    <div>
                        <h3 className="font-bold ">{name}</h3>
                        <p>{role}</p>
                        <p>$ {price}</p>
                    </div>
                </div>
                <h4 onClick={() => deleteSelectedPlayer(id , name , price)} className="text-error text-3xl"><i className="fa-regular fa-trash-can"></i></h4>
            </div>
        </div>
    );
};
Players.propTypes = {
    player: PropTypes.object.isRequired,
    deleteSelectedPlayer: PropTypes.func.isRequired
}
export default Players;