import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { authAPI } from "./api";

// Configure WebBrowser for better UX
WebBrowser.maybeCompleteAuthSession();

export interface GoogleAuthResult {
  success: boolean;
  token?: string;
  user?: any;
  error?: string;
}

export const googleAuth = {
  login: async (): Promise<GoogleAuthResult> => {
    try {
      // Get Google OAuth URL from backend
      const authUrl = authAPI.googleAuth();

      // Add redirect URI for mobile
      const redirectUri = Linking.createURL("auth/success");
      const fullAuthUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
        redirectUri
      )}`;

      // Open browser for OAuth
      const result = await WebBrowser.openAuthSessionAsync(
        fullAuthUrl,
        redirectUri,
        {
          showInRecents: true,
          preferEphemeralSession: true,
        }
      );

      if (result.type === "success" && result.url) {
        // Extract token from callback URL
        const url = new URL(result.url);
        const token = url.searchParams.get("token");

        if (token) {
          // Store token and get user data
          const userResponse = await authAPI.getProfile();

          return {
            success: true,
            token,
            user: userResponse,
          };
        }
      }

      return {
        success: false,
        error: "Authentication was cancelled or failed",
      };
    } catch (error: any) {
      console.error("Google Auth Error:", error);
      return {
        success: false,
        error: error.message || "Google authentication failed",
      };
    }
  },

  // Alternative method using direct URL handling
  handleAuthCallback: (url: string): GoogleAuthResult => {
    try {
      const parsedUrl = new URL(url);
      const token = parsedUrl.searchParams.get("token");

      if (token) {
        return {
          success: true,
          token,
        };
      }

      return {
        success: false,
        error: "No token found in callback URL",
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || "Failed to parse callback URL",
      };
    }
  },
};
