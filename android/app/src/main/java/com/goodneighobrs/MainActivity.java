package com.goodneighobrs;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstaceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstaceState);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "GoodNeighobrs";
  }
}
