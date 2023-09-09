import CancelIcon from '@mui/icons-material/Cancel'
import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material'

interface MultiSelectOption {
  id: number
  name: string
}

interface MultiSelectProps {
  inputLable: string
  options: MultiSelectOption[]
  selectedOptions: string[]
  handleChange: (event: SelectChangeEvent<string[]>) => void
  handleDelete: (value: string) => void
  handleClear: () => void
}

export const MultiSelect = ({
  inputLable,
  options,
  selectedOptions,
  handleChange,
  handleDelete,
  handleClear,
}: MultiSelectProps) => {
  const renderValue = (genreIds: string[]) => (
    <Stack gap={1} direction="row" flexWrap="wrap">
      {genreIds.map((value: string) => {
        const option = options.find(
          (option: MultiSelectOption) => String(option.id) === value,
        )

        return (
          <Chip
            key={value}
            label={option ? option.name : value}
            onDelete={() => handleDelete(value)}
            deleteIcon={
              <CancelIcon onMouseDown={(event) => event.stopPropagation()} />
            }
          />
        )
      })}
    </Stack>
  )

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        alignItems: 'center',
        width: '100%',
      }}
    >
      <FormControl sx={{ flex: 1, my: 1 }}>
        <InputLabel>Select Genres</InputLabel>

        <Select
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label={inputLable} />}
          renderValue={renderValue}
        >
          {options.map((option: MultiSelectOption) => (
            <MenuItem
              key={option.id}
              value={String(option.id)}
              sx={{ justifyContent: 'space-between' }}
            >
              {option.name}
              {selectedOptions.includes(String(option.id)) ? (
                <CheckIcon color="info" />
              ) : null}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <IconButton
        disabled={!selectedOptions.length}
        onClick={handleClear}
        aria-label="delete"
        size="large"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Box>
  )
}
