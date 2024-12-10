import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { ConfigType } from './ConfigType'
import {newsletterType} from './NewsletterType'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, ConfigType, newsletterType],
}
