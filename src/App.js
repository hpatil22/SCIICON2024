import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './component/ButtonAppBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Auth0Provider } from '@auth0/auth0-react';
// import { userAuth } from "paninian-user-auth";
import Sidebar from './component/Sidebar';
// import Main from './component/Main';
import Usecase1 from './component/Usecase1';
// import SidebarRoutesAll from './component/SidebarRoutesAll';
import Usecase2 from './component/Usecase2';
import Usecase3 from './component/Usecase3';
import Loaddata from './pages/Loaddata';
import DataQualityIndex from './pages/DataQualityIndex';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import FileSystemItem from './FileSystemItem';
import Loaddata2 from './usecase2/Loaddata2';
import FeatureExtraction from './usecase2/FeatureExtraction';
import SmoteOperation from './usecase2/SmoteOperation';
import SyntheticData from './usecase2/SyntheticData';
import DisplaySamples from './usecase2/DisplaySamples';
import Step2 from './usecase2/smoteoperation/Step2';
import Step3 from './usecase2/smoteoperation/Step3';
import LandingPage from './component/LandingPage';
import ModelExploration from './pages/ModelExploration';
import ModelExplainability from './pages/ModelExplainability';
import DataProcessing from './pages/DataProcessing';
import Footer from './component/Footer';
import Dataprocessing2 from './usecase2/Dataprocessing2';
import Loaddata3 from './usecase3/Loaddata3';
import CheckqualityDataIndex from './usecase3/CheckqualityDataIndex';
import Denoising3 from './usecase3/Denoising3';
import Output from './usecase3/Output';
import ProcessingImage from './usecase3/ProcessingImage';
import Matrix from './pages/Matrix';
import ConfusionMatrix from './pages/ConfusionMatrix';
import ModelExploration2 from './usecase2/ModelExploration2';
import Matrix2 from './usecase2/Matrix2';
import ModelExploration3 from './usecase3/ModelExploration3';
import Matrix3 from './usecase3/Matrix3';


// const { AuthProvider, useAuth } = userAuth;

// const domain = "dev-1fnqknurtd5hlneu.us.auth0.com";
// const clientId = "VItjd1aEsB2aTPcg9lkMjlwZUVK9jPVp";

// const Loader = () => {
//   return <></>;
// };

// export const FreeAuthenticationGuard = ({
//   children,
//   loader = () => {
//     return <></>;
//   },
// }) => {
//   const { isAuthenticated } = useAuth0();

//   const Loader = loader;

//   if (!isAuthenticated) return <Loader />;

//   return <>{children}</>;
// };
const fileSystem = {
  root: {
    type: 'folder',
    children: {
      home: {
        type: 'folder',
        children: {
          user: {
            type: 'folder',
            children: {
              'file1.txt': { type: 'file', content: 'This is file 1' },
              'file2.txt': { type: 'file', content: 'This is file 2' },
            },
          },
        },
      },
      var: {
        type: 'folder',
        children: {},
      },
      etc: {
        type: 'folder',
        children: {
          'config.txt': { type: 'file', content: 'Configuration file' },
        },
      },
    },
  },
};

const FileSystemExplorer = ({ fileSystem }) => {
  return (
    <div>
      {Object.keys(fileSystem.root.children).map((key) => (
        <FileSystemItem key={key} item={fileSystem.root.children[key]} path={key} />
      ))}
    </div>
  );
};

function App() {
 const {isAuthenticated ,user} = useAuth0();
  return (
    <div className="App">
      {/* <ButtonAppBar></ButtonAppBar> */}
      <BrowserRouter>
          
      <div className="App">
        <ButtonAppBar />
        
          {isAuthenticated && (
        <div className="container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/use-case-1" element={<Usecase1 />} />
              <Route path="/use-case-2" element={<Usecase2 />} />
              <Route path="/use-case-3" element={<Usecase3 />} />
              <Route path="/loaddata1" element={<Loaddata />} />
              <Route path="/dataquality1" element={<DataQualityIndex />} />
              <Route path="/datapreprocessing1" element={<DataProcessing/>} />
              <Route path="/modelexploration1" element={<ModelExploration/>} />
              <Route path="/modelexplainability1" element={<ModelExplainability/>} />
              <Route path="/loaddata2" element={<Loaddata2></Loaddata2>} />
              <Route path="/datapreprocessing2" element={<Dataprocessing2/>} />
              <Route path="/featureExtraction" element={<FeatureExtraction/>} />
              <Route path="/smoteoperation" element={<SmoteOperation/>} />
              <Route path="/syntheticdata" element={<SyntheticData/>} />
              <Route path="/displaysamples" element={<DisplaySamples/>} />
              <Route path="/loaddata3" element={<Loaddata3/>} />
              <Route path="/dataindex3" element={<CheckqualityDataIndex/>} />
              <Route path="/denoising3" element={<Denoising3/>} />
              <Route path="/output3" element={<Output/>} />
              <Route path="/processimage" element={<ProcessingImage/>} />
              <Route path="/step2" element={<Step2/>} />
              <Route path="/step3" element={<Step3/>} />
              <Route path="/matrix" element={<Matrix/>} />
              <Route path="/modelexploration2" element={<ModelExploration2/>} />
              <Route path="/matrix2" element={<Matrix2/>} />
              <Route path="/modelexploration3" element={<ModelExploration3/>} />
              <Route path="/matrix3" element={<Matrix3/>} />
              <Route path="/confusionmatrix" element={<ConfusionMatrix/>} />
            </Routes>
            <div style={{marginTop:"80px"}}>
            <Footer/>

            </div>
          </div>
          
        </div>
          )}
              

      </div>
  

          {/* </Auth0Provider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
