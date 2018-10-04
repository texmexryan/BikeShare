// import React from 'react';
// import ImageUploader from 'react-images-upload';

// export default class Image extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		 this.state = { 
// 			 pictures: []
// 			 };
// 		 this.onDrop = this.onDrop.bind(this);
// 	}

// 	// onDrop(e) {
// 	// 	this.setState({
//     //         [e.target.name]: e.target.value,
//     //     });
// 	// }
// 	onDrop(pictureFiles, pictureDataURLs) {
// 		// console.log(this.state.pictures)
// 		this.setState({
//             pictures: this.state.pictures.concat(pictureFiles),
//         });
// 	}

//     render() {
// 		console.log(this.state.pictures)
//         return (
// 			<div>
//             <ImageUploader
//                 	withIcon={true}
//                 	buttonText='Choose images'
//                 	onChange={this.onDrop}
//                 	imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                     maxFileSize={5242880}

//                     // value={this.props.bImage}
//                     // name = 'bImage'
//             />
			
// 			{ this.state.pictures[0]
// 				?
// 				(<img src={this.state.pictures} alt="preview"/>)
// 				:
// 				(null)
// 			}
			
// 			</div>
//         )
//     }
// }