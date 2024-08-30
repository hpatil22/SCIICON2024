// import React, { useState } from 'react';
// import { Button, CircularProgress, Pagination, FormControl, MenuItem, Select, OutlinedInput } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import data from '../data.json'; // Import the JSON file
// import { useNavigate } from 'react-router-dom';
// import { useSidebar } from '../contextapi/SidebarProvider';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const IMAGES_PER_PAGE = 8;

// function getStyles(label, selectedLabel, theme) {
//   return {
//     fontWeight:
//       selectedLabel === label
//         ? theme.typography.fontWeightMedium
//         : theme.typography.fontWeightRegular,
//   };
// }
// const Loaddata2 = () => {
//     const theme = useTheme();
//     const [selectedPath, setSelectedPath] = useState('');
//     const [selectedContent, setSelectedContent] = useState(null);
//     const [dropdownOptions, setDropdownOptions] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
  
//     const navigate = useNavigate();
//     const handleLoadDataClick = () => {
//       setIsLoading(true);
//       setTimeout(() => {
//         setDropdownOptions(data); // Load the JSON data into dropdown options
//         setIsLoading(false);
//       }, 1000); // Simulate loading time
//     };
  
//     const handleChange = (event) => {
//       setSelectedPath(event.target.value);
//       setCurrentPage(1); // Reset to first page on selection change
//     };
  
//     const handleButtonClick = () => {
//       const selectedOption = dropdownOptions.find(option => option.path === selectedPath);
//       setSelectedContent(selectedOption);
//     };
  
//     const handlePageChange = (event, value) => {
//       setCurrentPage(value);
//     };
//     const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

//   const handleButtonClickfor = () => {
//     setSelectedSubButton('datapreprocessing2'); // Set the active sidebar button
//     navigate('/datapreprocessing2'); // Navigate to the route
//   };
  
  
//     // Get images for the current page
//     const paginatedImages = selectedContent 
//       ? selectedContent.images.slice((currentPage - 1) * IMAGES_PER_PAGE, currentPage * IMAGES_PER_PAGE)
//       : [];
  
//   return (
//     <div>
//       <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '100px' }}>
//         <div style={{ marginTop: '10px' }}>
//           <Button 
//             variant="contained" 
//             sx={{ marginTop:"15px" , marginBottom:"10px" ,width: '100%',height:"55px" }} 
//             onClick={handleLoadDataClick}
//           >
//             Load Data
//           </Button>
//         </div>
//         <FormControl sx={{ m: 1, width: 1030, mt: 3, ml: 5 }}>
//           <Select
//             displayEmpty
//             value={selectedPath}
//             onChange={handleChange}
//             input={<OutlinedInput />}
//             renderValue={(selected) => {
//               if (isLoading) {
//                 return <CircularProgress size={24} />;
//               }
//               if (!selected) {
//                 return <em>Select a category</em>;
//               }
//               return selected;
//             }}
//             MenuProps={MenuProps}
//             inputProps={{ 'aria-label': 'Without label' }}
//             disabled={isLoading}
//           >
//             <MenuItem disabled value="">
//               <em>Select a category</em>
//             </MenuItem>
//             {dropdownOptions.map((option) => (
//               <MenuItem
//                 key={option.id}
//                 value={option.path}
//                 style={getStyles(option.label, selectedPath, theme)}
//               >
//                 {option.path }
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <div style={{ marginTop: '10px' }}>
//           <Button 
//             variant="contained" 
//             sx={{margin: '15px', width: '100%',height:"53px" }} 
//             onClick={handleButtonClick}
//             disabled={!selectedPath || isLoading}
//           >
//             Select
//           </Button>
//         </div>
//       </div>

//       {/* Display selected content below */}
//       <div className='containerr' style={{ height: '70vh', width: '100%' }}>
//         {selectedContent ? (
//           <div>
//             <h3>Selected Category:</h3>
//             <p>{selectedContent.label}</p>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
//               {paginatedImages.map((image, index) => (
//                 <img key={index} src={image} alt={`Image ${index}`} style={{ width: '100%', height: '25vh' }} />
//               ))}
//             </div>
//             <Pagination
//               count={Math.ceil(selectedContent.images.length / IMAGES_PER_PAGE)}
//               page={currentPage}
//               onChange={handlePageChange}
//               style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
//             />
//           </div>
//         ) : (
//           <p>No category selected.</p>
//         )}
//       </div>
//       <div style={{ position: "relative" }}>
//         <Button
//           variant="contained"
//           sx={{ margin: "20px", position: "absolute", right: 100 }}
//           onClick={handleButtonClickfor}
//         >
//           Process Data
//         </Button>
//       </div>
//     </div>
    
//   )
// }

// export default Loaddata2

import React, { useState } from 'react';
import { Button, CircularProgress, Pagination, FormControl, MenuItem, Select, OutlinedInput } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import data from '../data.json'; // Import the JSON file
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../contextapi/SidebarProvider';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const IMAGES_PER_PAGE = 8;

function getStyles(label, selectedLabel, theme) {
  return {
    fontWeight:
      selectedLabel === label
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

const Loaddata2 = () => {
  const theme = useTheme();
  const [selectedPath, setSelectedPath] = useState('');
  const [selectedContent, setSelectedContent] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const handleLoadDataClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDropdownOptions(data); // Load the JSON data into dropdown options
      setIsLoading(false);
    }, 1000); // Simulate loading time
  };

  const handleChange = (event) => {
    setSelectedPath(event.target.value);
    setCurrentPage(1); // Reset to first page on selection change
  };

  const handleButtonClick = () => {
    const selectedOption = dropdownOptions.find(option => option.path === selectedPath);
    setSelectedContent(selectedOption);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const { setSelectedSubButton } = useSidebar(); // Destructure the setter from the context

  const handleButtonClickfor = () => {
    setSelectedSubButton('dataquality1'); // Set the active sidebar button
    navigate('/dataquality1'); // Navigate to the route
  };

  // Get images for the current page
  const paginatedImages = selectedContent 
    ? selectedContent.images.slice((currentPage - 1) * IMAGES_PER_PAGE, currentPage * IMAGES_PER_PAGE)
    : [];

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '100px' }}>
        <div style={{ marginTop: '10px' }}>
          <Button 
            variant="contained" 
            sx={{ marginTop:"15px" , marginBottom:"10px" ,width: '100%',height:"55px" }} 
            onClick={handleLoadDataClick}
          >
            Load Data
          </Button>
        </div>
        <FormControl sx={{ m: 1, width: 1030, mt: 3, ml: 5 }}>
          <Select
            displayEmpty
            value={selectedPath}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (isLoading) {
                return <CircularProgress size={24} />;
              }
              if (!selected) {
                return <em>Select a category</em>;
              }
              return selected;
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
            disabled={isLoading}
          >
            <MenuItem disabled value="">
              <em>Select a category</em>
            </MenuItem>
            {dropdownOptions.map((option) => (
              <MenuItem
                key={option.id}
                value={option.path}
                style={getStyles(option.label, selectedPath, theme)}
              >
                {option.path }
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div style={{ marginTop: '10px' }}>
          <Button 
            variant="contained" 
            sx={{margin: '15px', width: '100%',height:"53px" }} 
            onClick={handleButtonClick}
            disabled={!selectedPath || isLoading}
          >
            Select
          </Button>
        </div>
      </div>

      {/* Display selected content below */}
      <div className='containerr' style={{ height: '70vh', width: '100%' }}>
        {selectedContent ? (
          <div>
            <h3>Selected Category:</h3>
            <p>{selectedContent.label}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {paginatedImages.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} style={{ width: '100%', height: '25vh' }} />
              ))}
            </div>
            <Pagination
              count={Math.ceil(selectedContent.images.length / IMAGES_PER_PAGE)}
              page={currentPage}
              onChange={handlePageChange}
              style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />
          </div>
        ) : (
          <p>No category selected.</p>
        )}
      </div>
      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          sx={{ margin: "20px", position: "absolute", right: 100 }}
          onClick={handleButtonClickfor}
        >
          Check Quality Index
        </Button>
      </div>
    </div>
  );
};

export default Loaddata2;