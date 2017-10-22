import * as React from 'react'
import * as firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader'
import {Howl} from 'howler'

interface MusicFileUploaderProps {
}
private interface FileUpload {
  id: string
  url?: string
  uploaded: boolean
  progress: number
}

interface MusicFileUploaderState {
  fileUploads: FileUpload[],
  isUploading: boolean,
  progress: number,
  fileUrl: string,
  lastUploadIndex: number
}


const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_DATABASE_NAME}firebaseio.com`,
  storageBucket: `${process.env.FIREBASE_BUCKET}.appspot.com`
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class MusicFileUploader extends React.Component<MusicFileUploaderProps, MusicFileUploaderState> {
  state: MusicFileUploaderState

  constructor(props: MusicFileUploaderProps) {
    super()

    this.state = {
      fileUpload: '',
      isUploading: false,
      progress: 0,
      fileUrl: '',
      lastUploadIndex: 0
    }
  }

  handleUploadStart = (task: any) => {
    const newUpload = {
      id: this.state.lastUploadIndex++,
      url: null,
      uploaded: false,
      progress: 0
    } as FileUpload


    debugger

    this.setState({
      fileUploads: this.state.fileUploads.concat(newUpload),
      isUploading: true,
      progress: 0
    })
  }
  handleProgress = (progress) => {
    this.setState({progress})
    console.log(`Upload Status: ${progress}%`)
  }
  handleUploadError = (error) => {
    this.setState({isUploading: false})
    console.error(error)
  }
  handleUploadSuccess = (filename, task: any) => {
    this.setState({fileUpload: filename, progress: 100, isUploading: false})
    firebaseApp.storage().ref().child(filename).getDownloadURL().then(url => {
      this.setState({fileUrl: url})

      debugger
      task.snapshot.ref.fullPath


      console.log('Done Uploading!')
    })
  }

  render() {
    return <div>
      <FileUploader
        accept='.mp3'
        name='avatar'
        randomizeFilename
        storageRef={firebaseApp.storage().ref()}
        onUploadStart={this.handleUploadStart}
        onUploadError={this.handleUploadError}
        onUploadSuccess={this.handleUploadSuccess}
        onProgress={this.handleProgress}
        multiple
      />

      {this.state.fileUrl ?
        (
          <audio controls>
            <source src={this.state.fileUrl} type='audio/mpeg'/>
          </audio>
        )
        :
        (
          <div>Upload something!</div>
        )
      }
    </div>
  }
}
