// import { useState } from "react";
// import "./App.css";
// import {
//   Box,
//   Button,
//   Container,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";

// function App() {
//   const [emailContent, setEmailContent] = useState("");
//   const [tone, setTone] = useState("");
//   const [generatedReply, setGeneratedReply] = useState("");
//   const [loading, setloading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async () => {
//     setloading(true);
//     setError("");
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/email/generate",
//         {
//           emailContent,
//           tone,
//         }
//       );
//       setGeneratedReply(
//         typeof response.data === "string"
//           ? response.data
//           : JSON.stringify(response.data)
//       );
//     } catch (error) {
//       setError("Failed to generate email reply. Please try again");
//       console.error(error);
//     } finally {
//       setloading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ py: 4 }}>
//       <Typography variant="h5" component="h3" gutterBottom>
//         Email Reply Generator
//       </Typography>

//       <Box sx={{ mx: 2 }}>
//         <TextField
//           fullWidth
//           multiline
//           rows={6}
//           variant="outlined"
//           label={"Original Email Content"}
//           value={emailContent || ""}
//           onChange={(e) => setEmailContent(e.target.value)}
//           sx={{ mb: 4 }}
//         />

//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel>Tone (Optional)</InputLabel>
//           <Select
//             value={tone || ""}
//             label={"Tone (Optional)"}
//             onChange={(e) => setTone(e.target.value)}
//           >
//             <MenuItem value="">None</MenuItem>
//             <MenuItem value="professional">Professional</MenuItem>
//             <MenuItem value="casual">Casual</MenuItem>
//             <MenuItem value="friendly">Friendly</MenuItem>
//           </Select>
//         </FormControl>

//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//           disabled={!emailContent || loading}
//           fullWidth
//         >
//           {loading ? <CircularProgress size={24}/> : "Generate Reply"}
//           {/* {loading ? (
//             <>
//               <CircularProgress size={24} color="inherit" sx={{ mr: 2 }} />
//               Generating...
//             </>
//           ) : (
//             "Generate Reply"
//           )} */}
//         </Button>
//       </Box>

//       {error && (
//         <Typography color="error" sx={{ mb: 2 }}>
//           {error}
//         </Typography>
//       )}

//       {generatedReply && (
//         <Box sx={{ mt: 3 }}>
//           <Typography variant="h6" gutterBottom>
//             Generated Reply:
//           </Typography>
//           <TextField
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={6}
//             value={generatedReply || ""}
//             inputProps={{ readOnly: true }}
//           />

//           <Button
//             variant="outlined"
//             sx={{ mt: 2 }}
//             onClick={() => navigator.clipboard.writeText(generatedReply)}
//           >
//             Copy to Clipboard
//           </Button>
//         </Box>
//       )}
//     </Container>
//   );
// }

// export default App;







// creating with mediaQuery 


import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  const theme = useTheme();
  const is320 = useMediaQuery("(max-width:320px)");
  const is480 = useMediaQuery("(max-width:480px)");
  const is768 = useMediaQuery("(max-width:768px)");
  const is1080 = useMediaQuery("(max-width:1080px)");

  //api: "http://localhost:8080/api/email/generate"

  const handleSubmit = async () => {
    setloading(true);
    setError("");
    try {
      const response = await axios.post(
        {REACT_API_URL},
        {
          emailContent,
          tone,
        }
      );
      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again");
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: is320 ? 2 : is480 ? 3 : is768 ? 4 : 5,
        px: is320 ? 1 : is480 ? 2 : 3,
        backgroundColor: is1080
          ? theme.palette.background.default
          : theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        sx={{
          fontSize: is320
            ? "1.2rem"
            : is480
            ? "1.4rem"
            : is768
            ? "1.6rem"
            : "1.8rem",
          textAlign: is768 ? "center" : "left",
        }}
      >
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 0 }}>
        <TextField
          fullWidth
          multiline
          rows={is320 ? 4 : 6}
          variant="outlined"
          label={"Original Email Content"}
          value={emailContent || ""}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{
            mb: is320 ? 2 : 4,
            fontSize: is320 ? "12px" : "14px",
          }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone || ""}
            label={"Tone (Optional)"}
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
          fullWidth
          sx={{
            fontSize: is320 ? "12px" : "14px",
            py: is320 ? 1 : 1.5,
          }}
        >
          {loading ? <CircularProgress size={24} /> : "Generate Reply"}
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{ mb: 2, mt: 2 }}>
          {error}
        </Typography>
      )}

      {generatedReply && (
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: is320 ? "1rem" : "1.2rem" }}
          >
            Generated Reply:
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={is320 ? 4 : 6}
            value={generatedReply || ""}
            inputProps={{ readOnly: true }}
            sx={{ fontSize: is320 ? "12px" : "14px" }}
          />

          <Button
            variant="outlined"
            sx={{ mt: 2, fontSize: is320 ? "12px" : "14px" }}
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default App;
