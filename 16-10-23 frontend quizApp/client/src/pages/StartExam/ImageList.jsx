// ORIGINAL CODE


// import React, { useState, useEffect } from 'react';

// function ImageList() {
//     const [images, setImages] = useState([]);


//     const id = 1; // Replace with the appropriate document ID
//     useEffect(() => {
//         // Fetch images from your Express API
//         // fetch(`http://localhost:5030/images/${id}`)
//         fetch(`http://localhost:7000/img`)

//             .then((response) => response.json())
//             .then((data) => setImages(data))
//             .catch((error) => console.error('Error fetching images:', error));
//     }, [id]);

//     return (
//         <div>
//             <h1>Images</h1>
//             {images.map((image, index) => (
//                 <div key={index}>
//                     <img
//                         src={`data:image/png;base64,${image.image_data}`}
//                         alt="Image"
//                     />
//                 </div>
//             ))}

//         </div>
//     );
// }

// export default ImageList;

// END OF ORIGINAL CODE









// STARTING CODE OF Displayed FIRST SET OF IMAGES FROM LIST OF IMAGES

// import React, { useState, useEffect } from 'react';

// function ImageList() {
//     const [images, setImages] = useState([]);
//     const setIdRange = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => i + start);
//     const idRanges = setIdRange(1, 6); // Modify the range as needed


//     const id = 1; // Replace with the appropriate document ID
//     useEffect(() => {
//         // Fetch images from your Express API for the specified ID ranges
//         Promise.all(
//             idRanges.map(id =>
//                 fetch(`http://localhost:7000/images/${id}`)
//                     .then(response => response.json())
//             )
//         )
//             .then(dataSets => {
//                 // Concatenate the data sets into a single array of images
//                 const allImages = dataSets.reduce((acc, dataSet) => acc.concat(dataSet), []);
//                 setImages(allImages);
//             })
//             .catch(error => console.error('Error fetching images:', error));
//     }, [id]); // Empty dependency array to fetch data only once when the component mounts

//     return (
//         <div>
//             <h1>Images</h1>
//             {images.map((image, index) => (
//                 <div key={index}>
//                     <img
//                         src={`data:image/png;base64,${image.image_data}`}
//                         alt="Image"
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ImageList;


// END CODE OF Displayed FIRST SET OF IMAGES FROM LIST OF IMAGES















// STARTING CODE OF DISPLAY ONLY QUESTIONS FROM IMAGES LIST

// import React, { useState, useEffect } from 'react';

// function ImageList() {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         // Fetch first image from each set of IDs (1-6, 7-12, ...)
//         const fetchData = async () => {
//             let fetchedImages = [];

//             for (let i = 1; i <= 100; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     const response = await fetch(`http://localhost:7000/images/${i}`);
//                     const data = await response.json();
//                     if (data.length > 0) {
//                         fetchedImages.push(data[0]); // Add only the first image from each set
//                     }
//                 } catch (error) {
//                     console.error('Error fetching images:', error);
//                 }
//             }

//             setImages(fetchedImages);
//         };

//         fetchData();
//     }, []); // Empty dependency array to fetch data only once when the component mounts

//     return (
//         <div>
//             <h1>Images</h1>
//             {images.map((image, index) => (
//                 <div key={index}>
//                     <img
//                         src={`data:image/png;base64,${image.image_data}`}
//                         alt="Image"
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ImageList;

// END CODE OF DISPLAY ONLY QUESTIONS FROM IMAGES LIST




// STARTING CODE OF DISPLAYING ONLY OPTIONS IMAGES FROM IMAGES LIST


// import React, { useState, useEffect } from 'react';

// function ImageList() {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         // Fetch images 2 to 5 from each set of IDs (1-6, 7-12, ...)
//         const fetchData = async () => {
//             let fetchedImages = [];

//             for (let i = 1; i <= 100; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     for (let j = i + 1; j <= i + 4; j++) {
//                         const response = await fetch(`http://localhost:7000/images/${j}`);
//                         const data = await response.json();
//                         if (data.length > 0) {
//                             fetchedImages.push(data[0]); // Add the second to fifth images from each set
//                         }
//                     }
//                 } catch (error) {
//                     console.error('Error fetching images:', error);
//                 }
//             }

//             setImages(fetchedImages);
//         };

//         fetchData();
//     }, []); // Empty dependency array to fetch data only once when the component mounts

//     return (
//         <div>
//             <h1>Images</h1>
//             {images.map((image, index) => (
//                 <div key={index}>
//                     <img
//                         src={`data:image/png;base64,${image.image_data}`}
//                         alt="Image"
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ImageList;

// END CODE OF DISPLAYING ONLY OPTIONS IMAGES FROM IMAGES LIST






// STARTING CODE OF DISPLAYING ONLY SOLUTIONS IMAGES FROM IMAGES LIST


// import React, { useState, useEffect } from 'react';

// function ImageList() {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         // Fetch the 6th image from each set of IDs (1-6, 7-12, ...)
//         const fetchData = async () => {
//             let fetchedImages = [];

//             for (let i = 6; i <= 100; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     const response = await fetch(`http://localhost:7000/images/${i}`);
//                     const data = await response.json();
//                     if (data.length > 0) {
//                         fetchedImages.push(data[0]); // Add the 6th image from each set
//                     }
//                 } catch (error) {
//                     console.error('Error fetching images:', error);
//                 }
//             }

//             setImages(fetchedImages);
//         };

//         fetchData();
//     }, []); // Empty dependency array to fetch data only once when the component mounts

//     return (
//         <div>
//             <h1>Images</h1>
//             {images.map((image, index) => (
//                 <div key={index}>
//                     <img
//                         src={`data:image/png;base64,${image.image_data}`}
//                         alt="Image"
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ImageList;

// END CODE OF DISPLAYING ONLY SOLUTIONS IMAGES FROM IMAGES LIST





// start of DISPLAYING QUESTIONS AND OPTIONS


// import React, { useState, useEffect } from 'react';

// function ImageList() {
//     const [Qimages, setQImages] = useState([]);

//     useEffect(() => {
//         // Fetch first image from each set of IDs (1-6, 7-12, ...)
//         const fetchData = async () => {
//             let fetchedImages = [];

//             for (let i = 1; i <= 100; i += 6) { // Assuming there are 100 sets of images
//                 try {
//                     const response = await fetch(`http://localhost:7000/images/${i}`);
//                     const data = await response.json();
//                     if (data.length > 0) {
//                         fetchedImages.push(data[0]); // Add only the first image from each set
//                     }
//                 } catch (error) {
//                     console.error('Error fetching images:', error);
//                 }
//             }

//             setQImages(fetchedImages);
//         };

//         fetchData();
//     }, []); // Empty dependency array to fetch data only once when the component mounts



//     const [OPTimages, setOPTImages] = useState([]);

//         useEffect(() => {
//             // Fetch images 2 to 5 from each set of IDs (1-6, 7-12, ...)
//             const fetchData = async () => {
//                 let fetchedImages = [];

//                 for (let i = 1; i <= 100; i += 6) { // Assuming there are 100 sets of images
//                     try {
//                         for (let j = i + 1; j <= i + 4; j++) {
//                             const response = await fetch(`http://localhost:7000/images/${j}`);
//                             const data = await response.json();
//                             if (data.length > 0) {
//                                 fetchedImages.push(data[0]); // Add the second to fifth images from each set
//                             }
//                         }
//                     } catch (error) {
//                         console.error('Error fetching images:', error);
//                     }
//                 }

//                 setOPTImages(fetchedImages);
//             };

//             fetchData();
//         }, []); // Empty dependency array to fetch data only once when the component mounts




//     return (
//         <div>
//             <h1>Images</h1>
//             {Qimages.map((image, index) => (
//                 <div key={index}>
//                     <img
//                         src={`data:image/png;base64,${image.image_data}`}
//                         alt="Image"
//                     />

//                 </div>
//             ))}
//             {OPTimages.map((image, index) => (
//                 <div key={index}>
//                     <img
//                         src={`data:image/png;base64,${image.image_data}`}
//                         alt="Image"
//                     />

//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ImageList;








//START OF DISPLAYING QUESTION WITH RESPECTIVE OPTIONS


import React, { useState, useEffect } from 'react';

function ImageList() {
    const [Qimages, setQImages] = useState([]);
    const [OPTimages, setOPTImages] = useState([]);

    useEffect(() => {
        // Fetch data for Qimages (first image from each set of IDs 1-6, 7-12, ...)
        const fetchQImages = async () => {
            let fetchedQImages = [];

            for (let i = 1; i <= 100; i += 6) { // Assuming there are 100 sets of images
                try {
                    const response = await fetch(`http://localhost:7000/images/${i}`);
                    const data = await response.json();
                    if (data.length > 0) {
                        fetchedQImages.push(data[0]); // Add only the first image from each set
                    }
                } catch (error) {
                    console.error('Error fetching Qimages:', error);
                }
            }

            setQImages(fetchedQImages);
        };

        // Fetch data for OPTimages (images 2 to 5 from each set of IDs 1-6, 7-12, ...)
        const fetchOPTImages = async () => {
            let fetchedOPTImages = [];

            for (let i = 1; i <= 100; i += 6) { // Assuming there are 100 sets of images
                try {
                    for (let j = i + 1; j <= i + 4; j++) {
                        const response = await fetch(`http://localhost:7000/images/${j}`);
                        const data = await response.json();
                        if (data.length > 0) {
                            fetchedOPTImages.push(data[0]); // Add the second to fifth images from each set
                        }
                    }
                } catch (error) {
                    console.error('Error fetching OPTimages:', error);
                }
            }

            setOPTImages(fetchedOPTImages);
        };

        fetchQImages();
        fetchOPTImages();
    }, []); // Empty dependency array to fetch data only once when the component mounts

    return (
        <div>
            <h1>Images</h1>
            {Qimages.map((qImage, index) => (
                <div key={index}>
                    <h2>QImage {index + 1}</h2>
                    <img
                        src={`data:image/png;base64,${qImage.image_data}`}
                        alt={`QImage ${index + 1}`}
                    />
                    {/* <h3>OPTImages</h3>
                    {OPTimages.slice(index * 4, index * 4 + 4).map((optImage, optIndex) => (
                        <img
                            key={optIndex}
                            src={`data:image/png;base64,${optImage.image_data}`}
                            alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
                        />

                    ))} */}

                    <ul className='options-container'>
                        {OPTimages.slice(index * 4, index * 4 + 4).map((optImage, optIndex) => (
                            <li>
                                <input type="radio"
                                    // id={answer}
                                    />


                                <label className='alpha-index' htmlFor={`option-${index}`}>
                                     <img
                                        key={optIndex}
                                        src={`data:image/png;base64,${optImage.image_data}`}
                                        alt={`OPTImage ${optIndex + 2}-${optIndex + 5}`}
                                    />
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ImageList;

//END OF DISPLAYING QUESTION WITH RESPECTIVE OPTIONS