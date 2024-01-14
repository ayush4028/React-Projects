import conf from '../conf.js'
import {Client, ID, Databases, Storage, Query} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;

    // Here we had made a constructor that we are going to do the operations in the client 
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)  // Your API Endpoint
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
           console.log("Appwrite service :: getCurrentUser :: error", error); 
        }
    }
    async updatepost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
           console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false; 
        }
        
    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;  
        }
    }

    // No need to take parameter in getPosts because we are taking all the posts and not any specific post
    // I will write query in getPost parameter because I wan't those posts those have a query of giving those posts whose status is true 
    async getPosts(
        queries = [Query.equal("status", "active")]
    )
    {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } 
        catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } 
        catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    // file delete service
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service();
export default service;
