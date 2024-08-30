
// import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

// function Sidebar() {
//   const [expandedButton, setExpandedButton] = useState(null);
//   const navigate = useNavigate();
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   // Function to toggle button groups
//   const handleToggleButtons = (buttonId) => {
//     setExpandedButton((prev) => (prev === buttonId ? null : buttonId));
//     navigate("/use-case-1");
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         padding: "20px",
//         width: "15%",
//         position: "relative",
//         height: "90vh",
//         backgroundColor: "#f5f5f5",
//         borderTop: "1px solid #ddd",
//         borderRadius: "8px",
//       }}
//     >
//       {/* User Info */}

//       {/* Main Button 1 */}
//       <Button
//         variant="contained"
//         onClick={() => handleToggleButtons(1)}
//         sx={{ margin: "20px", width: "80%" }}
//       >
//         Use Case 1
//       </Button>
//       {expandedButton === 1 && (
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             marginLeft: "20px",
//             marginTop: "10px",
//           }}
//         >
//           <Button
//             variant="outlined"
//             sx={{ marginBottom: "5px" }}
//             onClick={() => navigate("/loaddata1")}
//           >
//             Load Data
//           </Button>
//           <Button
//             variant="outlined"
//             sx={{ marginBottom: "5px" }}
//             onClick={() => navigate("/dataquality1")}
//           >
//             Check Data Quality Index
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Data Preprocessing
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Model Exploration
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Model Explainability
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Real Time Inference
//           </Button>
//         </Box>
//       )}

//       {/* Main Button 2 */}
//       <Button
//         variant="contained"
//         onClick={() => handleToggleButtons(2)}
//         sx={{ margin: "20px", width: "80%" }}
//       >
//         Use Case 2
//       </Button>
//       {expandedButton === 2 && (
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             marginLeft: "20px",
//             marginTop: "10px",
//             padding: "10px",
//           }}
//         >
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Load Data
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Check Data Quality Index
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Data Preprocessing
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Model Exploration
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Model Explainability
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Real Time Inference
//           </Button>
//         </Box>
//       )}

//       {/* Main Button 3 */}
//       <Button
//         variant="contained"
//         onClick={() => handleToggleButtons(3)}
//         sx={{ margin: "20px", width: "80%" }}
//       >
//         Use Case 3
//       </Button>
//       {expandedButton === 3 && (
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             marginLeft: "20px",
//             marginTop: "10px",
//           }}
//         >
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Load Data
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Check Data Quality Index
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Data Preprocessing
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Model Exploration
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Model Explainability
//           </Button>
//           <Button variant="outlined" sx={{ marginBottom: "5px" }}>
//             Real Time Inference
//           </Button>
//         </Box>
//       )}
//       {isAuthenticated && (
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",

//             justifyContent: "center",
//             marginBottom: "20px",
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             padding: "10px",
//             backgroundColor: "#f5f5f5",
//             borderTop: "1px solid #ddd",
//             borderRadius: "8px",
//             boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <Avatar
//             alt={user.name}
//             src={user.picture}
//             sx={{ marginRight: "10px" }}
//           />
//           <Box>
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               Welcome {user.name}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               {user.email}
//             </Typography>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default Sidebar;

import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSidebar } from '../contextapi/SidebarProvider';

function Sidebar() {
  const [expandedButton, setExpandedButton] = useState(null);
  // const [selectedSubButton, setSelectedSubButton] = useState(null);
  const { selectedSubButton, setSelectedSubButton } = useSidebar();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  // Function to toggle button groups
  const handleToggleButtons = (buttonId , route) => {
    setExpandedButton((prev) => (prev === buttonId ? null : buttonId));
    navigate(route)
  };
// Function to handle sub-button click
const handleSubButtonClick = (subButtonId, route) => {
  setSelectedSubButton(subButtonId); // Set selected sub-button
  navigate(route);
};


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
        width: "15%",
        position: "relative",
        height:"100vh",
        backgroundColor: "#f9f9f9",
        borderRight: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Main Button 1 */}
      <Button
        variant="contained"
        onClick={() => handleSubButtonClick('home', '/')}
        sx={{
          margin: "10px 0",
          width: "100%",
          color: selectedSubButton === 'home' ? '#fff' : "#000",
          backgroundColor: selectedSubButton === 'home' ? "#1976d2" : "#e0e0e0",
          '&:hover': {
            backgroundColor: selectedSubButton === 'home' ? "#115293" : "#bdbdbd",
          },
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "16px",
          textTransform: "none",
          
        }}
      >
        Home
      </Button>
      <Button
        variant="contained"
        onClick={() => {handleToggleButtons(1 ,"/use-case-1") }}
        sx={{
          margin: "10px 0",
          width: "100%",
          color: expandedButton === 1 ? "#fff" : "#000",
          backgroundColor: expandedButton === 1 ? "#1976d2" : "#e0e0e0",
          '&:hover': {
            backgroundColor: expandedButton === 1 ? "#115293" : "#bdbdbd",
          },
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "16px",
          textTransform: "none",
          
        }}
      >
        Use Case 1
      </Button>
      {expandedButton === 1 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            marginTop: "10px",
            width: "calc(100% - 20px)",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'loaddata1' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'loaddata1' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'loaddata1' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => handleSubButtonClick('loaddata1', '/loaddata1')}
          >
            Load Data
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'dataquality1' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'dataquality1' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'dataquality1' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('dataquality1', '/dataquality1')
              // navigate("/dataquality1")
            }
          >
            Check Data Quality Index
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'datapreprocessing1' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'datapreprocessing1' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'datapreprocessing1' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('datapreprocessing1', '/datapreprocessing1')
              // navigate("/dataquality1")
            }
          >
            Check Class Distribution
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'modelexploration1' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'modelexploration1' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'modelexploration1' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('modelexploration1', '/modelexploration1')
              // navigate("/dataquality1")
            }
          >
            Model Exploration
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'modelexplainability1' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'modelexplainability1' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'modelexplainability1' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('modelexplainability1', '/modelexplainability1')
              // navigate("/dataquality1")
            }
          >
            Model Explainability
          </Button>
          {/* <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: "#1976d2",
              '&:hover': {
                backgroundColor: "#e3f2fd",
              },
              textTransform: "none",
            }}
            onClick={() => navigate("/file")}
          >
            Real Time Inference
          </Button> */}
        </Box>
      )}

      {/* Main Button 2 */}
      <Button
        variant="contained"
        onClick={() => handleToggleButtons(2)}
        sx={{
          margin: "10px 0",
          width: "100%",
          color: expandedButton === 2 ? "#fff" : "#000",
          backgroundColor: expandedButton === 2 ? "#1976d2" : "#e0e0e0",
          '&:hover': {
            backgroundColor: expandedButton === 2 ? "#115293" : "#bdbdbd",
          },
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "16px",
          textTransform: "none",
        }}
      >
        Use Case 2
      </Button>
      {expandedButton === 2 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            marginTop: "10px",
            width: "calc(100% - 20px)",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'loaddata2' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'loaddata2' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'loaddata2' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('loaddata2', '/loaddata2')
              // navigate("/dataquality1")
            }
          >
            Load Data
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'datapreprocessing2' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'datapreprocessing2' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'datapreprocessing2' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('datapreprocessing2', '/datapreprocessing2')
              // navigate("/dataquality1")
            }
          >
            Data Preprocessing
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'featureExtraction' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'featureExtraction' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'featureExtraction' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('featureExtraction', '/featureExtraction')
              // navigate("/dataquality1")
            }
            
          >
            Feature Extraction
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'modelexploration2' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'modelexploration2' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'modelexploration2' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('modelexploration2', '/modelexploration2')
              // navigate("/dataquality1")
            }
            
          >
           Model Exploration
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'smoteoperation' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'smoteoperation' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'smoteoperation' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('smoteoperation', '/smoteoperation')
              // navigate("/dataquality1")
            }
           
          >
            SMOTE Operation
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'syntheticdata' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'syntheticdata' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'syntheticdata' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('syntheticdata', '/syntheticdata')
              // navigate("/dataquality1")
            }
          >
             Comparison between synthetic and original data
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'displaysamples' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'displaysamples' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'displaysamples' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('displaysamples', '/displaysamples')
              // navigate("/dataquality1")
            }
          >
            Display Samples
          </Button>
        </Box>
      )}


      {/* Main Button 3 */}
      <Button
        variant="contained"
        onClick={() => handleToggleButtons(3)}
        sx={{
          margin: "10px 0",
          width: "100%",
          color: expandedButton === 3 ? "#fff" : "#000",
          backgroundColor: expandedButton === 3 ? "#1976d2" : "#e0e0e0",
          '&:hover': {
            backgroundColor: expandedButton === 3 ? "#115293" : "#bdbdbd",
          },
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "16px",
          textTransform: "none",
        }}
      >
        Use Case 3
      </Button>
      {expandedButton === 3 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            marginTop: "10px",
            width: "calc(100% - 20px)",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'loaddata3' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'loaddata3' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'loaddata3' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('loaddata3', '/loaddata3')
              // navigate("/dataquality1")
            }
          >
            Load Data
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'dataindex3' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'dataindex3' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'dataindex3' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('dataindex3', '/dataindex3')
              // navigate("/dataquality1")
            }
          >
            Check Data Quality Index
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'processimage' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'processimage' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'processimage' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('processimage', '/processimage')
              // navigate("/dataquality1")
            }
          >
            Pre-processing Image
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'denoising3' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'denoising3' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'denoising3' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('denoising3', '/denoising3')
              // navigate("/dataquality1")
            }
          >
            Train ML on Denoising
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: selectedSubButton === 'output3' ? '#fff' : '#1976d2',
              backgroundColor: selectedSubButton === 'output3' ? '#1976d2' : 'transparent',
              '&:hover': {
                backgroundColor: selectedSubButton === 'output3' ? '#115293' : '#e3f2fd',
              },
              textTransform: "none",
            }}
            onClick={() => 
              handleSubButtonClick('output3', '/output3')
              // navigate("/dataquality1")
            }
          >
           Test Denoising
          </Button>
          {/* <Button
            variant="outlined"
            sx={{
              marginBottom: "5px",
              borderColor: "#1976d2",
              color: "#1976d2",
              '&:hover': {
                backgroundColor: "#e3f2fd",
              },
              textTransform: "none",
            }}
            onClick={() => navigate("/file")}
          >
            Real Time Inference
          </Button> */}
        </Box>
      )}


      {/* User Info */}
      {isAuthenticated && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "10px",
            backgroundColor: "#f9f9f9",
            borderTop: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Avatar
            alt={user.name}
            src={user.picture}
            sx={{ marginRight: "10px" }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Dr.{user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Sidebar;
