package com.sportsapp;

import android.app.Application;

//import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
      // Make sure you are using BuildConfig from your own application
      return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new VectorIconsPackage()
      );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
      return getPackages();
    }

    @Override
    public String getJSMainModuleName() {
      return "index";
    }
}
