package com.example.nablebackend.utils;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class StringEncryptor {

    private static final String SECRET_KEY = "YourSecretKey123"; // 16 characters for AES-128
    private static final String INIT_VECTOR = "YourInitVector12"; // 16 characters for AES-128

    public static String encrypt(String input) {
        try {
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
            SecretKeySpec secretKey = new SecretKeySpec(SECRET_KEY.getBytes("UTF-8"), "AES");
            IvParameterSpec iv = new IvParameterSpec(INIT_VECTOR.getBytes("UTF-8"));

            cipher.init(Cipher.ENCRYPT_MODE, secretKey, iv);
            byte[] encrypted = cipher.doFinal(input.getBytes());
            return Base64.getEncoder().encodeToString(encrypted);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String decrypt(String input) {
        try {
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
            SecretKeySpec secretKey = new SecretKeySpec(SECRET_KEY.getBytes("UTF-8"), "AES");
            IvParameterSpec iv = new IvParameterSpec(INIT_VECTOR.getBytes("UTF-8"));

            cipher.init(Cipher.DECRYPT_MODE, secretKey, iv);
            byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(input));
            return new String(decrypted);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}

