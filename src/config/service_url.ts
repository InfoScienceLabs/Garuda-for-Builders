import { URI } from "./url";
import { W, R } from "@angular/cdk/keycodes";

export const URI_CONFIG = {
  LOGIN_URI: URI + "login",
  REGISTER_URI: URI + "signup",
  CREATEPROPERTY_URI: URI + "property",
  VIEW_PROPERTY: URI + 'property',
  ADD_USER: URI + 'user',
  VIEW_USER: URI + 'user',
  ADD_BUILDER: URI + 'organization',
  VIEW_BUILDER: URI + 'organization',
  GETBUILDERNAME: URI + 'search/user/keyword=',
  GETORGNAME: URI + 'search/org/keyword=',
  PROPERTYBYID: URI + 'property',
  GETALLPROPERTYOFUSER: URI + 'property/user=',
  BUILDERBYID: URI + 'organization',
  USERBYID: URI + 'user',
  UPLOADIMAGE: URI + 'image',
  GETUSERBYID: URI + 'user/id',
  SEARCHUSERBYKEYWORD: URI + 'search/user/keyword=',
  PROPERTYCONFIRM: URI + 'property/confirm',
  MARKETPLACE: URI + 'marketplace',
  TAX: URI + 'tax',
  GETListing: URI + 'listing',
  REQUESTBALANCE: URI + 'wallet/request/balance',
  GETBALANCE: URI + 'wallet/balance'
};

