from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm


class UserRegForm(UserCreationForm):
    # username = forms.C
    email = forms.EmailField()


    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control-sm'}),
            'email': forms.EmailInput(attrs={'class': 'form-control-sm'}),
            'password1': forms.TextInput(attrs={'class': 'form-control-sm'}),
            'password2': forms.TextInput(attrs={'class': 'form-control-sm'}),

        }
 

class UserLogForm(AuthenticationForm):
 


    class Meta:
        model = User
        fields = ['username', 'password']

        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control-sm'}),
            'password': forms.TextInput(attrs={'class': 'form-control-sm'}),
        } 
 

