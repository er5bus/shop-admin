import Item from "./../items/Item"
import ListOfItems from "./../items/ListOfItems"
import NestedListOfItems from "./../items/NestedListOfItems"
import TableOfItems from "./../items/TableOfItems"


export const ITEM = "item"
export const LIST_OF_ITEMS = "list_of_items"
export const NESTED_LIST_OF_ITEMS = "nested_list_of_items"
export const TABLE_OF_ITEMS  = "table_of_items"


export const DEFAULT_ITEM = Item
export const ITEM_COMPONENT = {
  [ITEM]: Item,
  [LIST_OF_ITEMS]: ListOfItems,
  [NESTED_LIST_OF_ITEMS]: NestedListOfItems,
  [TABLE_OF_ITEMS]: TableOfItems
}

