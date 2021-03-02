import InputField from "./../inputs/InputField"
import InputMaskField from "./../inputs/InputMaskField"
import TextareaField from "./../inputs/TextareaField"
import SelectField from "./../inputs/SelectField"
import CreatableSelectWithModalField from "./../inputs/CreatableSelectWithModalField"
import CreatableSelectField from "./../inputs/CreatableSelectField"
import AsyncSelectField from "./../inputs/AsyncSelectField"
import CheckboxField from "./../inputs/CheckboxField"
import DatePickerField from "./../inputs/DatePickerField"
import WYSIWYGEditorField from "./../inputs/WYSIWYGEditorField"
import UploadField from "./../inputs/UploadField"
import RadioField from "./../inputs/RadioField"
import CheckboxGroupField from "./../inputs/CheckboxGroupField"
import TimePickerField from "./../inputs/TimePickerField"
import MultiSelectTableField from "./../inputs/MultiSelectTableField"
import PreloadedTableField from "./../inputs/PreloadedTableField"


export const INPUT = "input"
export const INPUT_MASK = "input_mask"
export const TEXTAREA = "textarea"
export const ASYNC_SELECT = "async_select"
export const SELECT = "select"
export const CREATABLE_SELECT = "creatable_select"
export const CREATABLE_SELECT_WITH_MODAL = "creatable_select_with_modal"
export const CHECKBOX = "checkbox"
export const CHECKBOX_GROUP = "checkbox_group"
export const RADIO = "radio"
export const DATE_PICKER = "date_picker"
export const TIME_PICKER = "time_picker"
export const WYSIWYG_EDITOR = "wysiwyg_editor"
export const UPLOAD = "upload"
export const PRELOADED_TABLE = "preloaded_table"
export const MULTISELECT_TABLE = "multiselect_table"


export const DEFAULT_TYPE = InputField
export const FORM_COMPONENT = {
  [INPUT]: InputField,
  [TEXTAREA]: TextareaField,
  [ASYNC_SELECT]: AsyncSelectField,
  [SELECT]: SelectField,
  [CREATABLE_SELECT_WITH_MODAL]: CreatableSelectWithModalField,
  [INPUT_MASK]: InputMaskField,
  [RADIO]: RadioField,
  [TIME_PICKER]: TimePickerField,
  [CREATABLE_SELECT]: CreatableSelectField,
  [CHECKBOX_GROUP]: CheckboxGroupField,
  [CHECKBOX]: CheckboxField,
  [WYSIWYG_EDITOR]: WYSIWYGEditorField,
  [DATE_PICKER]: DatePickerField,
  [UPLOAD]: UploadField,
  [PRELOADED_TABLE]: PreloadedTableField,
  [MULTISELECT_TABLE]: MultiSelectTableField
}

