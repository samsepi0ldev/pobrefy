export interface Root {
  contents: Content[]
}

export interface Content {
  type: string
  title: Title
  contents: Content2[]
  continuation: string
}

export interface Title {
  runs: Run[]
  text: string
}

export interface Run {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Content2 {
  type: string
  flex_columns: FlexColumn[]
  fixed_columns: any[]
  endpoint: Endpoint
  item_type: string
  id: string
  name: string
  subtitle: Subtitle
  subscribers: string
  thumbnail: Thumbnail
  menu: Menu
}

export interface FlexColumn {
  type: string
  title: Title2
  display_priority: string
}

export interface Title2 {
  runs: Run2[]
  text: string
}

export interface Run2 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Endpoint {
  type: string
  payload: Payload
  metadata: Metadata
}

export interface Payload {
  browseId: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs
}

export interface BrowseEndpointContextSupportedConfigs {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig
}

export interface BrowseEndpointContextMusicConfig {
  pageType: string
}

export interface Metadata {
  api_url: string
}

export interface Subtitle {
  runs: Run3[]
  text: string
}

export interface Run3 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Thumbnail {
  type: string
  contents: Content3[]
}

export interface Content3 {
  url: string
  width: number
  height: number
}

export interface Menu {
  type: string
  items: Item[]
  top_level_buttons: any[]
  label: string
}

export interface Item {
  type: string
  text: string
  icon_type: string
  endpoint: Endpoint2
}

export interface Endpoint2 {
  type: string
  payload: Payload2
  metadata: Metadata2
}

export interface Payload2 {
  playlistId?: string
  params?: string
  serializedShareEntity?: string
  sharePanelType?: string
}

export interface Metadata2 {
  api_url?: string
}
