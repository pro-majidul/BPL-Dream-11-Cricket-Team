import Player from "../player/Player";
import PropTypes from 'prop-types';
const AvailablePlayers = ({ availablePlayers ,handelChoicePlayers }) => {
    return (
        <div className="w-11/12 mx-auto py-5">
            <div className="grid md:grid-cols-3 gap-5">
                {
                    availablePlayers.map((player, index) => <Player
                        key={index}
                        player={player}
                    handelChoicePlayers={handelChoicePlayers}></Player>)
                }
            </div>


        </div>
    );
};
AvailablePlayers.propTypes = {
    availablePlayers: PropTypes.array.isRequired,
    handelChoicePlayers : PropTypes.func.isRequired
}
export default AvailablePlayers;