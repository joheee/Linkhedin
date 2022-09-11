import { useEffect, useRef, useState } from "react"
import * as io from "socket.io-client";
import './VideoCall.scss'

export const VideoCall =(prop:any)=> {
	const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState<MediaStream | null>(null)
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo :any = useRef<HTMLVideoElement>(null)
	const userVideo:any = useRef<HTMLVideoElement | null>(null)
	const connectionRef :any= useRef<HTMLVideoElement | null>(null)
	
	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream!)
				myVideo.current.srcObject = stream!
		})
		// socket.on("me", (id:any) => {
		// 	setMe(id)
		// })
		
		// socket.on("callUser", (data:any) => {
		// 	setReceivingCall(true)
		// 	setCaller(data.from)
		// 	setName(data.name)
		// 	setCallerSignal(data.signal)
		// })
	},[])

	// const callUser = (id:any) => {
	// 	const peer = new Peer({
	// 		initiator: true,
	// 		trickle: false,
	// 		stream: stream
	// 	})
	// 	peer.on("signal", (data:any) => {
	// 		socket.emit("callUser", {
	// 			userToCall: id,
	// 			signalData: data,
	// 			from: me,
	// 			name: name
	// 		})
	// 	})
	// 	peer.on("stream", (stream:any) => {
			
	// 			userVideo.current.srcObject = stream
			
	// 	})
	// 	socket.on("callAccepted", (signal:any) => {
	// 		setCallAccepted(true)
	// 		peer.signal(signal)
	// 	})

	// 	connectionRef.current = peer
	// }

	// const answerCall =() =>  {
	// 	setCallAccepted(true)
	// 	const peer = new Peer({
	// 		initiator: false,
	// 		trickle: false,
	// 		stream: stream
	// 	})
	// 	peer.on("signal", (data) => {
	// 		socket.emit("answerCall", { signal: data, to: caller })
	// 	})
	// 	peer.on("stream", (stream) => {
	// 		userVideo.current!.srcObject = stream!
	// 	})

	// 	peer.signal(callerSignal!)
	// 	connectionRef.current = peer
	// }

	// const leaveCall = () => {
	// 	setCallEnded(true)
	// 	connectionRef.current!.destroy()
	// }

	return (
		<>
		<div className="video-call-container">
			<div className="video-container">
				<div className="video">
					{
						stream === null ? null :
						<>
							{stream &&  <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
						</>
					}
				</div>
			</div>
			<div className="follow-button-effect" onClick={()=>prop.setIsVideo(false)}>end call</div>
		</div>
		</>
	)
}
