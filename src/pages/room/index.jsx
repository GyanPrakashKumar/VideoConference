import React from 'react'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';
const Room = () => {
    const { roomCode } = useParams();

    const meeting = async (element) => {
        // generate Kit Token
        const appID = 420378786;
        const serverSecret = '8ed75dfe92dce17aaaf9bd7f5140813c';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomCode,
            Date.now().toString(),
            'gyan'
        );
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Join the room.
        zp.joinRoom({
            container: element,
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showMyMicrophoneToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: true,
            showTextChat: true,
            showUserList: true,
            maxUsers: 50,
            layout: "Sidebar",
            // showLayoutButton: true,
            // scenario: {
            //     mode: "VideoConference",
            //     config: {
            //         role: "Host",
            //     },
            // },
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        })
    }

    return (
        <div className='room-page'>
            <h2>Video Conference</h2>
            <div ref={meeting} style={{ width: '80vw', height: '80vh', borderRadius: '5px' }} />
        </div>
    )
}

export default Room
