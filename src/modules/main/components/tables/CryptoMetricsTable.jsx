import { useEffect, useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel, Typography,
} from '@mui/material';
import {
  TablePaginationActions,
} from '@/modules/main/components/tables/TablePaginationActions';
import { visuallyHidden } from '@mui/utils';
import {
  DEFAULT_PAGINATION,
  getComparator,
  stableSort,
} from '@/helpers/utilsHelper';

export const CryptoMetricsTable = ({
  rows, columns, getRowValue, rowKey,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGINATION);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [sortType, setSortType] = useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (
    event, property, sortType) => {
    const isAsc = orderBy === property && order === 'asc';
    setSortType(sortType);
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (
    property, sortType) => (event) => {
    handleRequestSort(event, property, sortType);
  };
  useEffect(() => {
    setPage(0);
  }, [rows]);
  return (
    <Box sx={{
      width: {
        xs: '90vw',
        sm: '98vw',
        md: '100%',
      }
    }}>
      <TableContainer
        component={Paper}
        className="table-bg"
      >
        <Table className="space-table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}
              >
                #
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  {
                    column.sorter ?
                      (
                        <TableSortLabel
                          sx={{
                            boxShadow: 'none'
                          }}
                          active={orderBy === column.id}
                          direction={orderBy === column.id
                            ? order
                            : 'asc'}
                          onClick={createSortHandler(column.id,
                            column.sortType)}
                        >
                          {column.label}
                          {orderBy === column.id ? (
                            <Box component="span" sx={visuallyHidden}>
                              {order === 'desc'
                                ? 'sorted descending'
                                : 'sorted ascending'}
                            </Box>
                          ) : null}
                        </TableSortLabel>
                      ) :
                      column.label
                  }
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              stableSort(rows, getComparator(order, orderBy, sortType)).
                slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).
                map((row, rowIndex) => (
                  <TableRow role="checkbox" tabIndex={-1}
                            key={row[rowKey || 'id']}>
                    <TableCell>
                      { rowIndex + 1 }
                    </TableCell>
                    {columns.map((column) => {
                      const value = getRowValue(row, column.id);
                      return (
                        <TableCell
                          classes={{ root: 'font-cell' }}
                          key={column.id} align={column.align}
                        >
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
            }
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={2}
              >
                <Typography>
                  { `Total: ${rows.length} assets` }
                </Typography>
              </TableCell>
              <TablePagination
                sx={{
                  '& .MuiTablePagination-spacer': {
                    display: 'none'
                  },
                  '& .MuiToolbar-root': {
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'end'
                  }
                }}
                rowsPerPageOptions={[DEFAULT_PAGINATION]}
                colSpan={columns.length - 2}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                labelDisplayedRows={({ to, count }) => {
                  return '';
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};
