import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;

    return <div onClick={clickFunction}>{icon}</div>;
}

export default Arrow;