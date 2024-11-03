import PropTypes from 'prop-types';
import Players from './Players';

const SelectedPlayers = ({ selectPlayer, deleteSelectedPlayer ,handelColor}) => {

    return (
        <div className="mt-5">
            {
                selectPlayer.map((player, isx) => <Players
                    key={isx}
                    deleteSelectedPlayer={deleteSelectedPlayer}
                    player={player}></Players>)
            }
            <button
                onClick={() => handelColor("available")}
                className="border-[#E7FE] py-4 px-1 border bg-transparent rounded-xl ">
                <span className="bg-[#E7FE29] p-3   rounded-xl hover:bg-gradient-to-r from-amber-200 to-orange-600 font-semibold ">Add More Player</span></button>
        </div>

    );
};
SelectedPlayers.propTypes = {
    selectPlayer: PropTypes.array.isRequired,
    deleteSelectedPlayer: PropTypes.func.isRequired,
    handelColor :PropTypes.func.isRequired
}
export default SelectedPlayers;