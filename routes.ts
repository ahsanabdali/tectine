import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema, insertNewsletterSchema, insertBookingSchema, insertBlogSuggestionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactFormSchema.parse(req.body);
      const result = await storage.createContactForm(validatedData);
      
      res.status(201).json({
        success: true,
        data: result,
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`),
        });
      } else {
        console.error("Error in contact form submission:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request",
        });
      }
    }
  });

  // API route for newsletter subscriptions
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const result = await storage.createNewsletterSubscription(validatedData);
      
      res.status(201).json({
        success: true,
        data: result,
        message: "Newsletter subscription successful",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`),
        });
      } else {
        console.error("Error in newsletter subscription:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request",
        });
      }
    }
  });

  // API route for booking appointments
  app.post("/api/booking", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const result = await storage.createBooking(validatedData);
      
      res.status(201).json({
        success: true,
        data: result,
        message: "Booking request submitted successfully",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`),
        });
      } else {
        console.error("Error in booking request:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request",
        });
      }
    }
  });

  // API route for blog topic suggestions
  app.post("/api/blog-suggestion", async (req, res) => {
    try {
      const validatedData = insertBlogSuggestionSchema.parse(req.body);
      const result = await storage.createBlogSuggestion(validatedData);
      
      res.status(201).json({
        success: true,
        data: result,
        message: "Blog topic suggestion submitted successfully",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`),
        });
      } else {
        console.error("Error in blog suggestion:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request",
        });
      }
    }
  });

  // Get contact form submissions (for potential admin dashboard)
  app.get("/api/admin/contact-forms", async (req, res) => {
    try {
      const contactForms = await storage.getAllContactForms();
      res.status(200).json({
        success: true,
        data: contactForms,
      });
    } catch (error) {
      console.error("Error fetching contact forms:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching contact forms",
      });
    }
  });

  // Get newsletter subscriptions (for potential admin dashboard)
  app.get("/api/admin/newsletter-subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getAllNewsletterSubscriptions();
      res.status(200).json({
        success: true,
        data: subscriptions,
      });
    } catch (error) {
      console.error("Error fetching newsletter subscriptions:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching newsletter subscriptions",
      });
    }
  });

  // Get booking requests (for potential admin dashboard)
  app.get("/api/admin/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.status(200).json({
        success: true,
        data: bookings,
      });
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching bookings",
      });
    }
  });

  // Get blog suggestions (for potential admin dashboard)
  app.get("/api/admin/blog-suggestions", async (req, res) => {
    try {
      const suggestions = await storage.getAllBlogSuggestions();
      res.status(200).json({
        success: true,
        data: suggestions,
      });
    } catch (error) {
      console.error("Error fetching blog suggestions:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching blog suggestions",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}