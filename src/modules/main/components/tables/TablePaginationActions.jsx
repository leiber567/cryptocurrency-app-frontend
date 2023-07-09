import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

export const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }} className='p-0'>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </Box>
  );
}
