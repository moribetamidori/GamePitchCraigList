
import { useEffect, useState } from "react"
import { db } from '../../lib/firebaseConfig/init'
import { collection, orderBy, onSnapshot, query} from 'firebase/firestore';
import PitchItem from "./PitchItem";



export default function GamePitchList(props: any){

    const [pitchItems, setPitchItems] =  useState<any[]>([]);

    useEffect(() => {
        const collectionRef = collection(db, "GamePitchList")
        const q = query(collectionRef, orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot:any) => {
            setPitchItems(querySnapshot.docs.map((doc:any) => ({...doc.data(), 
                id:doc.id, 
                timestamp: doc.data().timestamp?.toDate().getTime()})))
        });
        return unsubscribe;
    }, [])
    return (
        <div>
            {pitchItems.map(pitchItem => <div key={pitchItem.id}><PitchItem 
                id={pitchItem.id}
                name={pitchItem.name}
                description={pitchItem.description}
                timestamp={pitchItem.timestamp}
                players={pitchItem.players}
                npcs={pitchItem.npcs}
                background={pitchItem.background} 
                worldModel={pitchItem.worldModel}
                platform={pitchItem.platform}
                goal={pitchItem.goal}
                intention={pitchItem.intention}
                contact={pitchItem.contact}                
                /></div>)}
        </div>
    )
    //timestamp 
}