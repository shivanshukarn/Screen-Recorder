console.log("Screen Recorder")

const preview = document.getElementById('preview')

// This is for Recoding video and previewing only
const RecordScreen = () => {
    navigator.mediaDevices
        .getDisplayMedia({
            video: { MediaSource: "screen" },
            audio: false
        })
        .then((stream) => {
            preview.srcObject = stream;
        });
}


// This is for Recoding video then downloading it

// const RecordScreen = async () => {
//     const stream = await navigator.mediaDevices
//         .getDisplayMedia({
//             video: { MediaSource: "screen", },
//             audio: false
//         })
//     const data = []
//     const mediaRecorder = new MediaRecorder(stream)

//     mediaRecorder.ondataavailable = (e) => {
//         data.push(e.data)
//     }
//     mediaRecorder.start()
//     mediaRecorder.onstop = (e) => {
//         video.src = URL.createObjectURL(
//             new Blob(data, {
//                 type: data[0].type
//             })
//         )
//     }

// }

RecordScreen()