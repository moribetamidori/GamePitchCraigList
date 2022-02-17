import { ListItem, ListItemText } from "@mui/material";
import moment from "moment";

interface Props {
    id: any
    name: any
    description: any
    timestamp: any
    players:any
    npcs:any
    background:any 
    worldModel:any
    platform:any
    goal:any
    intention:any
    contact:any}

export default function PitchItem(props: Props){
    const {
        id, 
        timestamp, 
        name, 
        description,
        players,
        npcs,
        background, 
        worldModel,
        platform,
        goal,
        intention,
        contact
    } = props;

    return (
        <ListItem
            sx={{mt:3, boxShadow:3}}
            style={{backgroundColor:'#FAFAFA'}}
        >
            <ListItemText
                primary={name}
                secondary={
                    <>
                    {description}<br/> 
                    {timestamp}<br/>
                    {players}<br/>
                    {npcs}<br/>
                    {background}<br/>
                    {worldModel}<br/>
                    {platform}<br/>
                    {goal}<br/>
                    {intention}<br/>
                    {contact}<br/>
                    {moment(timestamp).format("MMMM do, yyyy")} <br/>
                    </>
                }
            />

        </ListItem>
            
    )
}