import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

const SwipeButtons = () => {
    return (
        <div className="SwipeButtons">
            <IconButton className="btnReplay"> <ReplayIcon fontSize="large" /> </IconButton>
            <IconButton className="btnClose"> <CloseIcon fontSize="large" /> </IconButton>
            <IconButton className="btnStarRate"> <StarRateIcon fontSize="large" /> </IconButton>
            <IconButton className="btnFavorite"> <FavoriteIcon fontSize="large" /> </IconButton>
            <IconButton className="btnFlashOn"> <FlashOnIcon fontSize="large" /> </IconButton>
        </div>
    );
}

export default SwipeButtons;