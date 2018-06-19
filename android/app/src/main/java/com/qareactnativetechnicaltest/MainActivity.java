package com.qareactnativetechnicaltest;

import com.facebook.react.ReactActivity;
import android.os.Bundle; // required for onCreate parameter
import android.webkit.WebView;

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView.setWebContentsDebuggingEnabled(true);
    }

    @Override
    protected String getMainComponentName() {
        return "QAReactNativeTechnicalTest";
    }
}
