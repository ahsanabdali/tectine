import { 
  users, type User, type InsertUser,
  contactForms, type ContactForm, type InsertContactForm, 
  newsletters, type Newsletter, type InsertNewsletter,
  bookings, type Booking, type InsertBooking,
  blogSuggestions, type BlogSuggestion, type InsertBlogSuggestion
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Define the storage interface with all required methods
export interface IStorage {
  // User methods (keep for existing auth implementation)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactForm(data: InsertContactForm): Promise<ContactForm>;
  getContactForm(id: number): Promise<ContactForm | undefined>;
  getAllContactForms(): Promise<ContactForm[]>;
  updateContactFormStatus(id: number, status: string): Promise<ContactForm | undefined>;
  
  // Newsletter subscription methods
  createNewsletterSubscription(data: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscription(id: number): Promise<Newsletter | undefined>;
  getNewsletterSubscriptionByEmail(email: string): Promise<Newsletter | undefined>;
  getAllNewsletterSubscriptions(): Promise<Newsletter[]>;
  updateNewsletterStatus(id: number, active: boolean): Promise<Newsletter | undefined>;
  
  // Booking methods
  createBooking(data: InsertBooking): Promise<Booking>;
  getBooking(id: number): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;
  
  // Blog suggestion methods
  createBlogSuggestion(data: InsertBlogSuggestion): Promise<BlogSuggestion>;
  getBlogSuggestion(id: number): Promise<BlogSuggestion | undefined>;
  getAllBlogSuggestions(): Promise<BlogSuggestion[]>;
  updateBlogSuggestionStatus(id: number, status: string): Promise<BlogSuggestion | undefined>;
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Contact form methods
  async createContactForm(data: InsertContactForm): Promise<ContactForm> {
    const [contactForm] = await db.insert(contactForms).values(data).returning();
    return contactForm;
  }

  async getContactForm(id: number): Promise<ContactForm | undefined> {
    const [contactForm] = await db.select().from(contactForms).where(eq(contactForms.id, id));
    return contactForm;
  }

  async getAllContactForms(): Promise<ContactForm[]> {
    return db.select().from(contactForms).orderBy(contactForms.createdAt);
  }

  async updateContactFormStatus(id: number, status: string): Promise<ContactForm | undefined> {
    const [contactForm] = await db
      .update(contactForms)
      .set({ status })
      .where(eq(contactForms.id, id))
      .returning();
    return contactForm;
  }

  // Newsletter subscription methods
  async createNewsletterSubscription(data: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscription = await this.getNewsletterSubscriptionByEmail(data.email);
    if (existingSubscription) {
      // If exists but inactive, reactivate it
      if (!existingSubscription.active) {
        return this.updateNewsletterStatus(existingSubscription.id, true) as Promise<Newsletter>;
      }
      // If already active, just return it
      return existingSubscription;
    }
    
    // Create new subscription
    const [subscription] = await db.insert(newsletters).values(data).returning();
    return subscription;
  }

  async getNewsletterSubscription(id: number): Promise<Newsletter | undefined> {
    const [subscription] = await db.select().from(newsletters).where(eq(newsletters.id, id));
    return subscription;
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<Newsletter | undefined> {
    const [subscription] = await db
      .select()
      .from(newsletters)
      .where(eq(newsletters.email, email.toLowerCase()));
    return subscription;
  }

  async getAllNewsletterSubscriptions(): Promise<Newsletter[]> {
    return db.select().from(newsletters).orderBy(newsletters.subscribedAt);
  }

  async updateNewsletterStatus(id: number, active: boolean): Promise<Newsletter | undefined> {
    const [subscription] = await db
      .update(newsletters)
      .set({ active })
      .where(eq(newsletters.id, id))
      .returning();
    return subscription;
  }

  // Booking methods
  async createBooking(data: InsertBooking): Promise<Booking> {
    const [booking] = await db.insert(bookings).values(data).returning();
    return booking;
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
    return booking;
  }

  async getAllBookings(): Promise<Booking[]> {
    return db.select().from(bookings).orderBy(bookings.createdAt);
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const [booking] = await db
      .update(bookings)
      .set({ status })
      .where(eq(bookings.id, id))
      .returning();
    return booking;
  }

  // Blog suggestion methods
  async createBlogSuggestion(data: InsertBlogSuggestion): Promise<BlogSuggestion> {
    const [suggestion] = await db.insert(blogSuggestions).values(data).returning();
    return suggestion;
  }

  async getBlogSuggestion(id: number): Promise<BlogSuggestion | undefined> {
    const [suggestion] = await db.select().from(blogSuggestions).where(eq(blogSuggestions.id, id));
    return suggestion;
  }

  async getAllBlogSuggestions(): Promise<BlogSuggestion[]> {
    return db.select().from(blogSuggestions).orderBy(blogSuggestions.createdAt);
  }

  async updateBlogSuggestionStatus(id: number, status: string): Promise<BlogSuggestion | undefined> {
    const [suggestion] = await db
      .update(blogSuggestions)
      .set({ status })
      .where(eq(blogSuggestions.id, id))
      .returning();
    return suggestion;
  }
}

// Export a singleton instance of the storage
export const storage = new DatabaseStorage();