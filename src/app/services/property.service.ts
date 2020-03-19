import { Injectable } from '@angular/core';
import { Property } from "../models/models";
import { HttpClient } from "@angular/common/http";
import { URI_CONFIG } from "../../config/service_url";
import { HandleErrorService } from './handle-error.service';
import { catchError } from 'rxjs/operators';
import { Builder } from 'protractor';


// const login_url: string = URI_CONFIG.LOGIN_URI;

const createproperty: string = URI_CONFIG.CREATEPROPERTY_URI;
const getProperty: string = URI_CONFIG.VIEW_PROPERTY;
const getPropertyByID: string = URI_CONFIG.PROPERTYBYID;
const getUserProperties: string = URI_CONFIG.GETALLPROPERTYOFUSER;
const getUserPropertiesmarketplace:string = URI_CONFIG.GETALLPROPERTYOFUSER;
const getBuilderName: string = URI_CONFIG.GETBUILDERNAME;
const propertyconfirm: string = URI_CONFIG.PROPERTYCONFIRM;
const marketplace_url: string = URI_CONFIG.MARKETPLACE; 
const tax_url: string = URI_CONFIG.TAX;
const getlistings:string = URI_CONFIG.GETListing;




@Injectable({

  providedIn: 'root'

})
export class PropertyService {
  constructor(private http: HttpClient, private exception : HandleErrorService) { }
  
  public  addProperty(property: Property) : any{
    // return this.http.post<Property>(`${createproperty}`, property);
    // let propertyObject = Object.assign({property});
    const propertyObject = Object.assign({}, property);
    console.log('service: ',propertyObject);
    propertyObject.owner.forEach(element =>{
      delete element.OwnerName;
    });
    return this.http.post<Property>(`${createproperty}`, property)
                    .pipe(catchError(this.exception.handleError()));
  }

  public  updateProperty(propertyId) : any{
    // return this.http.post<Property>(`${createproperty}`, property);
    // let propertyObject = Object.assign({property});
    const propertyObject = Object.assign({}, propertyId);
    console.log('service: ',propertyObject);
    // propertyObject.owner.forEach(element =>{
    //   delete element.OwnerName;
    // });
    return this.http.put<Property>(`${createproperty}/${propertyId}`, propertyId)
                    .pipe(catchError(this.exception.handleError()));
  }

  public propertystatus(confirm : any){
    return this.http.put(`${propertyconfirm}`,confirm)
                    .pipe(catchError(this.exception.handleError()));
  }; 
  public propertyconfirmstatus(id : any, confirm: any ){
    return this.http.post(`${getlistings}/confirm=${id}`,confirm)
                    .pipe(catchError(this.exception.handleError()));
  }

  public usermarketplace(marketplace : any){
    return this.http.post(`${marketplace_url}`,marketplace);
  }
  public taxpercentage(tax : any){
    return this.http.post<Property>(`${tax_url}`,tax)
                    .pipe(catchError(this.exception.handleError()));
  }
  public updateTaxPercentage(tax:any){
    return this.http.put<Property>(`${tax_url}/${tax.propertyType}`,tax)
                    .pipe(catchError(this.exception.handleError()));
  }
  
  public getAllUserProperties(page: number,userId){
    return this.http.get<Property[]>(`${getUserProperties}${userId}/page=${page}`)
                    .pipe(catchError(this.exception.handleError()));
  }
  public getPropertyByID(propertyId) {
    return this.http.get<Property>(`${getPropertyByID}/${propertyId}`)
                    .pipe(catchError(this.exception.handleError()));
  }
  public deleteproperty(propertyId) {
    return this.http.delete<Property>(`${createproperty}/${propertyId}`)
                    .pipe(catchError(this.exception.handleError()));
  }

  public getallProperties(page: number) {
    return this.http.get<Property[]>(`${getProperty}/page=${page}`)
                    .pipe(catchError(this.exception.handleError()));
  }
  getBuilderByName(name) {
    return this.http.get(`${getBuilderName}${name}`)
                    .pipe(catchError(this.exception.handleError()));
  }
  getWorldmarketplace(page:any, userId: string){
    return this.http.get<Property[]>(`${marketplace_url}/page=${page}`)
                    .pipe(catchError(this.exception.handleError()));;
  }

  getUsermarketplace(page:any, userId: string){
    return this.http.get<Property[]>(`${marketplace_url}/user=${userId}/page=${page}`)
                    .pipe(catchError(this.exception.handleError()));;
  }
  getTaxByType(type: string){
    return this.http.get(`${tax_url}/${type}`)
                    .pipe(catchError(this.exception.handleError()));
  }
  getTax(){
    return this.http.get(`${tax_url}`)
                    .pipe(catchError(this.exception.handleError()));
  }
  getallListings(page :number){
    return this.http.get(`${getlistings}/page=${page}`)
                    .pipe(catchError(this.exception.handleError()));
  }
  getListingById(id){
    return this.http.get(`${getlistings}/${id}`)
                    .pipe(catchError(this.exception.handleError()));
  }
  listingType(type: string, property: any){
    return this.http.post(`${getlistings}/${type}`, property)
                    .pipe(catchError(this.exception.handleError()));
  }
 
}