import AvailablePlayers from '../availablePlayer/AvailablePlayers';
import PropTypes from 'prop-types';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Availablebtn = ({ selectPlayer, handelColor, active, availablePlayers, handelChoicePlayers, deleteSelectedPlayer }) => {
    return (
        <div className="w-11/12 mx-auto py-5 ">
            <div className="md:flex items-center justify-between">
                {active.select ? <h2 className="font-bold text-3xl text-gray-900">Available Players</h2> : <h2 className="font-bold text-3xl text-gray-900">Select Players({selectPlayer.length} / 6)</h2> }
                <div className="border w-fit rounded-3xl">
                    <button
                        onClick={() => handelColor("available")}
                        className={`px-8 py-4 rounded-s-3xl border-[#E7FE29] ${active.select ? 'bg-[#E7FE29]' : ''}  font-semibold`}>Available</button>
                    <button
                        onClick={() => handelColor("select")}
                        className={`px-8 py-4 rounded-e-3xl font-semibold  ${active.select ? '' : 'bg-[#E7FE29]'} `}>Selected ({selectPlayer.length})</button>
                </div>
            </div>

            {active.select ? <AvailablePlayers
                availablePlayers={availablePlayers}
                handelChoicePlayers={handelChoicePlayers}></AvailablePlayers> : <SelectedPlayers
                    selectPlayer={selectPlayer}
                    deleteSelectedPlayer={deleteSelectedPlayer}
                    handelColor={handelColor}
                ></SelectedPlayers>}

        </div>
    );
};
Availablebtn.propTypes = {
    availablePlayers: PropTypes.array.isRequired,
    handelColor: PropTypes.func.isRequired,
    active: PropTypes.object.isRequired,
    handelChoicePlayers: PropTypes.func.isRequired,
    selectPlayer: PropTypes.array.isRequired,
    deleteSelectedPlayer: PropTypes.func.isRequired
}
export default Availablebtn;