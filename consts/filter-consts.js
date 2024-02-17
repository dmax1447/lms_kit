const TYPES_FILTERS = {
    SELECT: 'select',
    MULTI_SELECT: 'multi_select',
    DATE: 'date',
    SEPARATED: 'separated',
    RANGE: 'range',
}

const MAP_TYPE_COMPONENT_DESKTOP = {
    [TYPES_FILTERS.SELECT]: 'DesktopSelect',
    [TYPES_FILTERS.MULTI_SELECT]: 'DesktopMultiSelect',
    [TYPES_FILTERS.DATE]: 'DesktopDatePicker',
    [TYPES_FILTERS.SEPARATED]: 'DesktopDatePicker',
    [TYPES_FILTERS.RANGE]: 'DesktopDatePicker',
}

const MAP_TYPE_COMPONENT_MOBILE = {
    [TYPES_FILTERS.SELECT]: 'SMultiselectWithReset',
    [TYPES_FILTERS.MULTI_SELECT]: 'SMultiselectWithCheckbox',
    [TYPES_FILTERS.DATE]: 'SDatePicker',
    [TYPES_FILTERS.SEPARATED]: 'SDatePicker',
    [TYPES_FILTERS.RANGE]: 'SDatePicker',
}

export {
    TYPES_FILTERS,
    MAP_TYPE_COMPONENT_DESKTOP,
    MAP_TYPE_COMPONENT_MOBILE
}
