module.exports = {
  
  // Tag used to indicate a valid Explore for the tool
  validExploreTag: '#audience-builder',

  // Tag used to indicate a default Explore to be used when the tool is open
  defaultExploreTag: '#default-explore',
  
  // Tag used to indicate the Looker field designated as the UID
  uidTag: 'google-ads-uid',
  
  // Tags used to indicate Looker fields that match the fields utilized by the Customer Match Action
  // See https://help.looker.com/hc/en-us/articles/4403987588371 for more details
  googleAdsTags: [
    'google-ads-idfa',
    'google-ads-aaid',
    'google-ads-email',
    'google-ads-phone',
    'google-ads-first',
    'google-ads-last',
    'google-ads-street',
    'google-ads-city',
    'google-ads-state',
    'google-ads-country',
    'google-ads-postal'
  ],

  // Tag used to indicate a duplicate field that should not be rendered in the UI
  duplicateTag: 'google-ads-duplicate',

  // Tag used to indicate a field that should appear in the center pane by default, without having to be clicked
  defaultFieldTag: 'crm-default-field',

  // List of permissable data types for fields, including types that need to be coerced for filtering
  typeMap: {
    number: 'number',
    string: 'string',
    yesno: 'yesno',
    date: 'date',
    date_date: 'date',
    zipcode: 'string',
    count: 'number',
    average_distinct: 'number',
    date_year: 'number',
    date_day_of_month: 'number',
    date_day_of_year: 'number',
    date_month: 'number',
    count_distinct: 'number',
    sum_distinct: 'number',
    max: 'number',
    min: 'number',
    average: 'number',
    sum: 'number'
  },

  fieldsList: () => {
    const properties = [
      'dimension_group',  
      'field_group_label',
      'field_group_variant',
      'hidden',
      'label_short',
      'name',
      'suggest_dimension',
      'suggest_explore',
      'suggestable',
      'tags',
      'type',
      'view',
      'view_label'
    ].join(',')
    return `fields(dimensions(${properties}),measures(${properties}))`
  },

  // Looker API destination for Customer Match action
  formDestination: '1::google_ads_customer_match'
}
