import { TextField, Button} from "@mui/material"
import { useState } from "react"
import { collection, orderBy, onSnapshot, query, addDoc, serverTimestamp} from 'firebase/firestore';
import { db } from '../../lib/firebaseConfig/init'
import Box from '@mui/material/Box';
import React from "react";

export default function PitchForm(props: any){
    const [pitchItem, setPitchItem] = 
        useState({
            name:'', 
            description:'',
            players:'',
            npcs:'',
            background:'', 
            worldModel:'',
            platform:'',
            goal:'',
            intention:'',
            contact:''
        });
    const onSubmit = async () => {
        const collectionRef = collection(db, "GamePitchList")
        const docRef = await addDoc(collectionRef, {...pitchItem, timestamp:
        serverTimestamp()})
        setPitchItem({
            name:'', 
            description:'',
            players:'',
            npcs:'',
            background:'', 
            worldModel:'',
            platform:'',
            goal:'',
            intention:'',
            contact:''
        })
        alert(`Game pitch with id ${docRef.id} is addded successfully`)

    }

    return (
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
        autoComplete="off">
        <div>
            {/* <pre>{JSON.stringify(pitchItem)}</pre> */}
            <TextField required fullWidth label="Game Name" margin="normal"
                value={pitchItem.name}
                // errorMessages={['this field is required', 'email is not valid']}
                onChange={(e) => setPitchItem({...pitchItem, name: e.target.value})}
            />
            <TextField fullWidth label="Platform?" multiline maxRows={4}
                value={pitchItem.platform}
                onChange={(e) => setPitchItem({...pitchItem, platform: e.target.value})}
            />
            <TextField fullWidth label="How Do We Contact You?" multiline maxRows={4}
                value={pitchItem.contact}
                onChange={(e) => setPitchItem({...pitchItem, contact: e.target.value})}
            />
          </div>
          <div>

            <TextField fullWidth label="Gameplay Description" margin="normal"
                value={pitchItem.description}
                multiline
                rows={4}
                onChange={(e) => setPitchItem({...pitchItem, description: e.target.value})}
            />

            <TextField fullWidth label="Who are the Players?" margin="normal"
                value={pitchItem.players}
                multiline
                rows={4}
                onChange={(e) => setPitchItem({...pitchItem, players: e.target.value})}
            />

            <TextField fullWidth label="Who/what are the NPCs?" margin="normal"
                value={pitchItem.npcs}
                multiline
                rows={4}
                onChange={(e) => setPitchItem({...pitchItem, npcs: e.target.value})}
            />  

            <TextField fullWidth label="What’s the Background Story?"
                value={pitchItem.background}
                multiline
                rows={4}
                onChange={(e) => setPitchItem({...pitchItem, background: e.target.value})}
            />

            <TextField fullWidth label="What World Does it Live In?"
                value={pitchItem.worldModel}
                multiline
                rows={4}
                onChange={(e) => setPitchItem({...pitchItem, worldModel: e.target.value})}
            />

            <TextField fullWidth label="What is the Goal?"
                value={pitchItem.goal}
                multiline
                rows={4}
                onChange={(e) => setPitchItem({...pitchItem, goal: e.target.value})}
            />

            <TextField fullWidth label="What Do We Learn from the Experience?"
                value={pitchItem.intention}
                multiline
                rows={4}
                onChange={(e) => setPitchItem({...pitchItem, intention: e.target.value})}
            />
        </div>

            <Button onClick={onSubmit} variant="contained" sx={{mt:3}}>Submit My Pitch</Button>
        </Box>
        
    )
}